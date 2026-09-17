import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsEmail, Matches, Length, IsNumberString, IsOptional } from "class-validator"


export class SignUpDto {
    @ApiProperty({
        description: 'The name of the user',
        example: 'Juan Perez'
    })
    @IsString()
    @IsNotEmpty()
    @Length(3, 80)
    name: string

    @ApiProperty({
        description: 'the email of the user',
        example: 'juanperez@gmail.com'
    })
    @IsEmail()
    email: string


    @ApiProperty({
        description: 'the password of the user',
        example: 'JuanPerez123@'
    })
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/)
    password: string

    @ApiProperty({
        description: 'the confirmPassword of the user',
        example: 'JuanPerez123@'
    })
    @IsString()
    @IsNotEmpty()
    confirmPassword: string


    @ApiProperty({
        description: 'the address of the user',
        example: 'Tucuman 55'
    })
    @IsString()
    @Length(3, 80)
    address: string


    @ApiProperty({
        description: 'the phone of the user',
        example: '1234567890'
    })
    @IsString()
    @IsNotEmpty()
    @IsNumberString()
    phone: string


    @ApiProperty({
        description: 'the country of the user',
        example: 'Argentina'
    })
    @IsString()
    @IsOptional()
    @Length(5, 20)
    country?: string


    @ApiProperty({
        description: 'the city of the user',
        example: 'Córdoba'
    })
    @IsString()
    @IsOptional()
    @Length(5, 20)
    city?: string
}
