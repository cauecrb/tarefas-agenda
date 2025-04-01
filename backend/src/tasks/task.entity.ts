import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    dueDate: Date;

    @Column({ default: 'pending' })
    status: string;

    @ManyToOne(() => User, (user) => user.tasks)
    user: User;
}