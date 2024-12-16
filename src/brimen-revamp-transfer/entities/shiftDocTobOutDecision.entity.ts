import {
  Column,
  Entity,
  ManyToOne,
  OneToMany, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { ShiftDocTobOutFile } from './shiftDocTobOutFile.entity';
import { ShiftDocTobOutDecisionStorageAddress } from "./shiftDocTobOutDecisionStorageAddress.entity";
import { ShiftDocTobOutAcc } from "./shiftDocTobOutAcc.entity";

@Entity()
export class ShiftDocTobOutDecision {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 4, nullable: false })
  decisionYear: string;

  @Column({ type: 'varchar', length: 2, nullable: false })
  decisionMonth: string;

  @OneToMany(() => ShiftDocTobOutFile, (n) => n.decision,{cascade:true})
  files: ShiftDocTobOutFile[];

  @ManyToOne(() => ShiftDocTobOutAcc, (n) => n.decisions, {
    onDelete: 'CASCADE',
  })
  accountNumber: ShiftDocTobOutAcc;

  @OneToMany(() => ShiftDocTobOutDecisionStorageAddress, (n) => n.decision,{cascade:true})
  storageAddress: ShiftDocTobOutDecisionStorageAddress[];
}
