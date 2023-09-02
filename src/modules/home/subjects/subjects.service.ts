import {Injectable} from "@nestjs/common"
import {InjectRepository} from "@nestjs/typeorm"
import {Subjects} from "./entities/subjects.entity"
import {Repository} from "typeorm"

@Injectable()
export class SubjectsService {
    constructor(
        @InjectRepository(Subjects) private readonly subjectRepository: Repository<Subjects>
    ) { }

    async getSubjects(): Promise<Subjects[]> {
        return await this.subjectRepository.find()
    }
}