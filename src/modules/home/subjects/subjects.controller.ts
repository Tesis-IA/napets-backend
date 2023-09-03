import {Controller, Get} from "@nestjs/common"
import {SubjectsService} from "./subjects.service"

@Controller('subjects')
export class SubjectsController {
    constructor(private readonly subjectsService: SubjectsService) { }

    @Get()
    async getSubjects() {
        return await this.subjectsService.getSubjects()
    }
}