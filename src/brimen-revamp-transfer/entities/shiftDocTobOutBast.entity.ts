import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ShiftDocTobOutBastDocument } from "./shiftDocTobOutBastDocument.entity";
import { ShiftDocTobOut } from "./shiftDocTobOut.entity";

@Entity()
export class ShiftDocTobOutBast extends BaseEntity{
  @Column({type:"varchar",length:"32",nullable:true})
  bast_number:string;

  @Column({nullable:true})
  date:Date;

  @Column({type:"varchar",nullable:true})
  branch_name:string;

  @Column({type:"text",nullable:true})
  branch_address:string;

  @Column({type:"text",nullable:true})
  branch_address_province:string;

  @Column({type:"text",nullable:true})
  branch_address_city:string;

  @Column({type:"varchar",length:"50",nullable:true})
  branch_phone_number: string;

  @Column({type:"varchar",length:"50",nullable:true})
  pihak_pertama_name: string;

  @Column({type:"varchar",length:"10",nullable:true})
  pihak_pertama_pernr:string;

  @Column({type:"varchar",length:"50",nullable:true})
  pihak_pertama_jabatan:string;

  @Column({type:"varchar",length:"100",nullable:true})
  pihak_pertama_uker:string;

  @Column({type:"varchar",length:"50",nullable:true})
  pihak_kedua_name: string;

  @Column({type:"varchar",length:"10",nullable:true})
  pihak_kedua_pernr:string;

  @Column({type:"varchar",length:"50",nullable:true})
  pihak_kedua_jabatan:string;

  @Column({type:"varchar",length:"100",nullable:true})
  pihak_kedua_uker:string;

  @Column({type:"text",nullable:true})
  additional_desc:string;

  @Column({type:"varchar",length:"10",nullable:true})
  maker_uker_asal_pernr:string;

  @Column({type:"varchar",length:"50",nullable:true})
  maker_uker_asal_name:string;

  @Column({type:"varchar",length:"50",nullable:true})
  maker_uker_asal_position:string;

  @Column({type:"varchar",length:"50",nullable:true})
  maker_uker_asal_division:string;

  @Column({type:"varchar",length:"10",nullable:true})
  signer_uker_asal_pernr:string;

  @Column({type:"varchar",length:"50",nullable:true})
  signer_uker_asal_name:string;

  @Column({type:"varchar",length:"50",nullable:true})
  signer_uker_asal_position:string;

  @Column({type:"varchar",length:"50",nullable:true})
  signer_uker_asal_division:string;

  @Column({type:"varchar",length:"10",nullable:true})
  maker_uker_tujuan_pernr:string;

  @Column({type:"varchar",length:"50",nullable:true})
  maker_uker_tujuan_name:string;

  @Column({type:"varchar",length:"50",nullable:true})
  maker_uker_tujuan_position:string;

  @Column({type:"varchar",length:"50",nullable:true})
  maker_uker_tujuan_division:string;

  @Column({type:"varchar",length:"10",nullable:true})
  signer_uker_tujuan_pernr:string;

  @Column({type:"varchar",length:"50",nullable:true})
  signer_uker_tujuan_name:string;

  @Column({type:"varchar",length:"50",nullable:true})
  signer_uker_tujuan_position:string;

  @Column({type:"varchar",length:"50",nullable:true})
  signer_uker_tujuan_division:string;

  @OneToMany(()=>ShiftDocTobOutBastDocument,(sdtobd)=>sdtobd.bast,{cascade:true})
  bast_documents: ShiftDocTobOutBastDocument[]


  @ManyToOne(()=>ShiftDocTobOut,(n)=>n.bast,{
    onDelete:"CASCADE"
  })
  tobout: ShiftDocTobOut;
}