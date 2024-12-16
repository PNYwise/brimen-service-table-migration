import { transferBranchStatusEnum, transferBranchStatusMasukEnum } from "./tob-status.enum";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, Table } from 'typeorm';

@Entity('transfers_of_branches')
@Index(["cif", "nomorRekening", "branchAsalKode", "branchTujuanKode", "statusTOBProcess"], { unique: true })
export class DataTob{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cif:string;

  @Column()
  debiturName:string

  @Column()
  nomorRekening: string;

  @Index()
  @Column()
  branchAsalKode: string;

  @Column()
  branchAsalNama: string;

  @Column()
  branchTujuanKode: string;

  @Column()
  branchTujuanNama: string;

  @Column()
  pengelolaPN: string;

  @Column()
  pengelolaNama: string;

  @Column()
  tglApproveTujuan: Date;

  @Column()
  statusTOBKode: string;

  @Column()
  statusTOBDeskripsi: string;

  @Column({nullable:true})
  tglRequestTOB: Date;

  @Column({nullable:true})
  tobOutId: string;

  @Column({
    type:'enum',
    enum:transferBranchStatusEnum,
    default:transferBranchStatusEnum.M0
  })
  statusTOBProcess: transferBranchStatusEnum;

  @Column({
    type:'enum',
    enum:transferBranchStatusMasukEnum,
    default:transferBranchStatusMasukEnum.M0
  })
  statusTOBMasuk: transferBranchStatusMasukEnum;

  @CreateDateColumn()
  created_at:string;

  @UpdateDateColumn()
  updated_at:string;

  @DeleteDateColumn()
  deleted_at:string;
}
