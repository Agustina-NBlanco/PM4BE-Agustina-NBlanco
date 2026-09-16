import { SetMetadata } from "@nestjs/common";
import { UserRole } from "src/Users/enum/role.enum";


export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles) 