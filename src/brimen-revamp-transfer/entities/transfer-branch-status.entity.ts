import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { transferBranchStatusEnum } from './shiftTobOutStatus.enum';
  
  @Entity('transfer-branch-status')
  export class TransferBranchStatus {
    @PrimaryColumn()
    status_id : string;

    @Column({ 
        type: 'enum', 
        enum: transferBranchStatusEnum, 
        default:transferBranchStatusEnum.A0
    })
    status_desc:string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  