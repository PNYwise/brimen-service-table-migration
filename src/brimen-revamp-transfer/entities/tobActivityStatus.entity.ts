import { BaseEntity } from "./base.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShiftDocTobOut } from "./shiftDocTobOut.entity";

@Entity()
export class TobActivityStatus extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable:true})
  check_document: string;

  @Column({nullable:true})
  check_document_date: string;

  @Column({nullable:true})
  check_document_name: string;

  @Column({nullable:true})
  check_document_pernr: string;

  @Column({nullable:true})
  approval_out: string;

  @Column({nullable:true})
  approval_out_date: string;

  @Column({nullable:true})
  approval_out_name: string;

  @Column({nullable:true})
  approval_out_pernr: string;

  @Column({nullable:true})
  sending: string;

  @Column({nullable:true})
  sending_date: string;

  @Column({nullable:true})
  sending_name: string;

  @Column({nullable:true})
  sending_pernr: string;

  @Column({nullable:true})
  accept_and_process: string;

  @Column({nullable:true})
  accept_and_process_date: string;

  @Column({nullable:true})
  accept_and_process_name: string;

  @Column({nullable:true})
  accept_and_process_pernr: string;

  @Column({nullable:true})
  approval_in: string;

  @Column({nullable:true})
  approval_in_date: string;

  @Column({nullable:true})
  approval_in_name: string;

  @Column({nullable:true})
  approval_in_pernr: string;

  @Column({nullable:true})
  completed: string;

  @Column({nullable:true})
  completed_date: string;

  @ManyToOne(()=>ShiftDocTobOut,(n)=>n.bast,{
    onDelete:"CASCADE"
  })
  tobout: ShiftDocTobOut;
}