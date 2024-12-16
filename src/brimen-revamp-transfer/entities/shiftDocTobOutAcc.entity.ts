import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShiftDocTobOut } from "./shiftDocTobOut.entity";
import { ShiftDocTobOutDecision } from "./shiftDocTobOutDecision.entity";

@Entity()
export class ShiftDocTobOutAcc {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  acctNum: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  productType: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  productFacility: string;

  @ManyToOne(() => ShiftDocTobOut, (n) => n.accountNumbers, {
    onDelete: 'CASCADE',
  })
  tobout: ShiftDocTobOut;

  @OneToMany(() => ShiftDocTobOutDecision, (n) => n.accountNumber,{cascade:true})
  decisions: ShiftDocTobOutDecision[];
}