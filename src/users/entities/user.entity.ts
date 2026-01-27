import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()

export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column({unique: true})
    email: string;

     @Column({ nullable: true })
     age: number;

    @CreateDateColumn()
    createdAt: Date;
}













// export class User{
//     id:number;
//     name:string;
//     email:string;
// }