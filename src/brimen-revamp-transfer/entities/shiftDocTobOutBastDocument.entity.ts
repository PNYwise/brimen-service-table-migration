import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShiftDocTobOutBast } from "./shiftDocTobOutBast.entity";

@Entity()
export class ShiftDocTobOutBastDocument {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable:true})
  no_rekening:string;

  @Column({nullable:true})
  bulan_putusan:string;

  @Column({nullable:true})
  tahun_putusan:string;

  @Column({nullable:true})
  doc_id:string;

  @Column({nullable:true})
  doc_name:string;

  @Column({nullable:true})
  number:string;

  @Column({nullable:true})
  date:string

  @ManyToOne(()=>ShiftDocTobOutBast,(sdtob)=>sdtob.bast_documents,{
    onDelete:"CASCADE"
  })
  bast: ShiftDocTobOutBast;
}