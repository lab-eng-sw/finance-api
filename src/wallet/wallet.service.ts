import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletService {
  create(createWalletDto: CreateWalletDto) {
    return 'This action adds a new wallet';
  }

  findAll() {
    const wallets = await this.prisma.investor.findMany();
      if (!investors.length) {
        throw new NotFoundException('No investors found');
      }
      return wallets;
  }

  findOne(id: number) {
    const wallet = await this.prisma.investor.findUnique({
        where: { id },
      });
      if (!wallet) {
        throw new NotFoundException(`Investor with ID ${id} not found`);
      }
      return wallet;
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
