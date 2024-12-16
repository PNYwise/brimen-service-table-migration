import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class BrispoterrLog{
    @PrimaryGeneratedColumn('uuid')
    log_id: string;

    @Column({nullable: true})
    statusCode : string;

    @Column({ nullable: true })
    feature:string;

    @Column({ nullable: true })
    service:string;

    @Column()
    method:string;

    @Column()
    url: string;
  
    @Column('text')
    headers: string;
  
    @Column({ type: 'text', nullable: true })
    request_body: string;

    @Column({ type: 'text', nullable: true })
    request_params:string;

    @Column({ type: 'text', nullable: true })
    request_query:string

    @Column({ type: 'text', nullable: true })
    response_log:string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    timestamp: Date;

    beforeInsert() {
        this.log_id = uuidv4();
    }
}
