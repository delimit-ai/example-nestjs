import { Controller, Get } from "@nestjs/common";

@Controller("api/health")
export class HealthController {
  private readonly startTime = Date.now();

  @Get()
  check() {
    return {
      status: "healthy",
      uptime: Math.floor((Date.now() - this.startTime) / 1000),
    };
  }
}
