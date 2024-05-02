import { Controller, Post, Query, Request, UseGuards } from '@nestjs/common';
import { ReactService } from './react.service';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('react')
@UseGuards(AuthGuard)
export class ReactController {
  constructor(private readonly reactService: ReactService) {}

  @Post()
  toggleReact(@Query('postId') postId: string, @Request() req: any) {
    this.reactService.create(postId, req.user.sub);
  }
}
