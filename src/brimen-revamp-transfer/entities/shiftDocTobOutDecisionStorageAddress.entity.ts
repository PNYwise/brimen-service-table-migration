import { BaseEntity } from "./base.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShiftDocTobOutDecision } from "./shiftDocTobOutDecision.entity";

@Entity()
export class ShiftDocTobOutDecisionStorageAddress extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  kreditLokasi:String;

  @Column({ type: 'varchar', length: 20, nullable: true  })
  kreditRuangan:String;

  @Column({ type: 'varchar', length: 20, nullable: true  })
  kreditLemari:String;

  @Column({ type: 'varchar', length: 20, nullable: true  })
  kreditRak:String;

  @Column({  type: 'varchar', length: 20, nullable: true  })
  kreditBaris:String;

  @Column({ type: 'varchar', length: 100, nullable: true })
  agunanLokasi:String;

  @Column({ type: 'varchar', length: 20, nullable: true  })
  agunanRuangan:String;

  @Column({ type: 'varchar', length: 20, nullable: true  })
  agunanLemari:String;

  @Column({ type: 'varchar', length: 20, nullable: true  })
  agunanRak:String;

  @Column({  type: 'varchar', length: 20, nullable: true  })
  agunanBaris:String;

  @ManyToOne(() => ShiftDocTobOutDecision, (n) => n.storageAddress, {
    onDelete: 'CASCADE',
  })
  decision: ShiftDocTobOutDecision;
}