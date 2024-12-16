import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { LogFetchBranch } from "./log_fetch_branch.entity";

@Entity()
export class LogFetchBranchDuplicate {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length:50 })
    cif: string

    @Column({ type: 'varchar', length:50 })
    nomorRekening: string

    @Column({ type: 'varchar', length:50 })
    branchTujuanKode: string;

    @Column({ type: 'varchar', length:50 })
    branchAsalKode: string;

    @ManyToMany(() => LogFetchBranch, (n) => n.duplicate, {
        onDelete: 'CASCADE'
    })
    log: LogFetchBranch;
}