import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Orders } from "./orders.entity"
import { UserRole } from "../Users/enum/role.enum"
import { ApiProperty } from "@nestjs/swagger"

@Entity({
    name: 'users'
})
export class Users {

    @ApiProperty({
        description: 'The id of the user',
        example: 'abcd-efgh-ijkl-mnño'
    })
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ApiProperty({
        description: 'The name of the user',
        example: 'Agustina Blanco'
    })
    @Column({ type: 'varchar', length: 50, nullable: false })
    name: string

    @ApiProperty({
        description: 'The email of the user',
        example: 'example@gmail.com'
    })
    @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
    email: string

    @ApiProperty({
        description: 'The password of the user',
        example: 'Example555@'
    })
    @Column({ type: 'varchar', nullable: false })
    password: string

    @ApiProperty({
        description: 'The phone of the user',
        example: '3895578344'
    })
    @Column({ type: 'varchar' })
    phone: string

    @ApiProperty({
        description: 'The country of the user',
        example: 'Argentina'
    })
    @Column({ type: 'varchar', length: 50 })
    country: string

    @ApiProperty({
        description: 'The address of the user',
        example: 'Bv Agüero 77'
    })
    @Column({ type: 'text' })
    address: string

    @ApiProperty({
        description: 'The city of the user',
        example: 'Jesús María'
    })
    @Column({ type: 'varchar', length: 50 })
    city: string

    @ApiProperty({
        description: 'The orders of the user'
    })

    @OneToMany(() => Orders, order => order.user)
    orders: Orders[]

    @ApiProperty({
        description: 'The rol of the user',
        default: 'user'
    })
    @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    admin: UserRole

    @ApiProperty({
        description: 'The image of the user'
    })
    @Column({ type: "varchar", length: 50, nullable: true })
    imagenUrl: string
}