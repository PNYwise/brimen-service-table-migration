import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { LogFetchBranchDuplicate } from "./log_fetch_branch_duplicate.entity";

@Entity()
export class LogFetchBranch {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'int' })
    success: number

    @Column({ type: 'int' })
    failed: number

    @Column({ type: 'varchar', length: 50 })
    times: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => LogFetchBranchDuplicate, (n) => n.log)
    duplicate: LogFetchBranchDuplicate[];
}