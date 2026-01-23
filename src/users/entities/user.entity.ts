import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()

export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column({unique: true})
    email: string;
}













// export class User{
//     id:number;
//     name:string;
//     email:string;
// }