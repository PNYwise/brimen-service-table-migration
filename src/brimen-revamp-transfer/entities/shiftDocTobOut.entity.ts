import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShiftDocTobOutDecision } from './shiftDocTobOutDecision.entity';
import {
  DeliveryTypeEnum,
  shiftTobOutStatusEnum, StepTobEnum
} from "./shiftTobOutStatus.enum";
import { ShiftDocTobOutBast } from "./shiftDocTobOutBast.entity";
import { TobActivityStatus } from "./tobActivityStatus.entity";
import { ShiftDocTobOutAcc } from "./shiftDocTobOutAcc.entity";

@Entity()
export class ShiftDocTobOut {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  acctCIF: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  acctName: string;

  @Column({ type: 'varchar', length: 70, nullable: false })
  originBranch: string;

  @Column({ type: 'varchar', length: 70, nullable: false })
  originName: string;

  @Column({ type: 'varchar', length: 70, nullable: false })
  destinationBranch: string;

  @Column({ type: 'varchar', length: 70, nullable: false })
  destinationName: string;

  @Column({ type: 'date' })
  requestDate: string;

  @OneToMany(() => ShiftDocTobOutAcc, (n) => n.tobout,{cascade:true})
  accountNumbers: ShiftDocTobOutAcc[];

  @Column({ type: 'varchar', length: 8, nullable: true })
  aproval_pernr: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  aproval_name: string;

  @Column({ type: 'text', nullable: true })
  aproval_notes: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  aproval_in_pernr: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  aproval_in_name: string;

  @Column({ type: 'text', nullable: true })
  aproval_in_notes: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  pengelola_name: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  pengelola_pernr: string;

  @Column({
    type: 'enum',
    enum: shiftTobOutStatusEnum,
    default: shiftTobOutStatusEnum.REQUEST,
  })
  status: shiftTobOutStatusEnum;

  @Column({ type: 'varchar', length: 300, nullable: false })
  reason: string;

  @Column({
    type: 'enum',
    enum: DeliveryTypeEnum,
    default: DeliveryTypeEnum.BRI,
  })
  delivery_type: DeliveryTypeEnum;

  @Column({ type: 'varchar', length: 8, nullable: true })
  bri_sender_pernr: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  bri_sender_name: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  bri_sender_phone_number: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  expedition_service: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  expedition_receipt: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  created_by_pernr: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  bast_filename: string;

  @Column({ type: 'boolean', nullable: true , default: false})
  is_minio: string;

  @Column({ type: 'text', nullable: true })
  bast_path: string;

  @Column({ type: 'enum',enum:StepTobEnum, default: StepTobEnum.TO1 })
  step_tob: StepTobEnum;

  @OneToMany(() => ShiftDocTobOutBast, (n) => n.tobout,{cascade:true})
  bast: ShiftDocTobOutBast[];

  @OneToMany(() => TobActivityStatus, (n) => n.tobout,{cascade:true})
  activities: TobActivityStatus[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
