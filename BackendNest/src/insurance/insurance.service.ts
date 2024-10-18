import { Injectable } from '@nestjs/common';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import { Insurance } from './entities/insurance.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InsuranceService {
  constructor(
    @InjectRepository(Insurance)
    private readonly InsuranceRepository: Repository<Insurance>,
  ){}


  create(createInsuranceDto: CreateInsuranceDto) {
    return 'This action adds a new insurance';
  }

  findAll() {
    return this.InsuranceRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} insurance`;
  }

  update(id: number, updateInsuranceDto: UpdateInsuranceDto) {
    return `This action updates a #${id} insurance`;
  }

  remove(id: number) {
    return `This action removes a #${id} insurance`;
  }
}
