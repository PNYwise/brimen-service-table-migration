import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ShiftDocTobOutDecision } from './shiftDocTobOutDecision.entity';

@Entity()
export class ShiftDocTobOutFile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  docId: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  docName: string;

  @Column({ type: 'bool', default: false })
  physique: boolean;

  @Column({ type: 'bool', default: false })
  digital: boolean;

  @Column({ type: 'bool', default: false })
  physique_tob_in: boolean;

  @Column({ type: 'bool', default: false })
  digital_tob_in: boolean;

  @ManyToOne(() => ShiftDocTobOutDecision, (n) => n.files, {
    onDelete: 'CASCADE',
  })
  decision: ShiftDocTobOutDecision;
}
