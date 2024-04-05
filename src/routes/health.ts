import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

export async function healthCheck(app: FastifyInstance) {
	app
		.withTypeProvider<ZodTypeProvider>()
		.get("/health-check", async (_req, rpl) => {
			return rpl.status(200).send("OK");
		});
}
