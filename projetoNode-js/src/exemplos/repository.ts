import { Usuario } from "./entities/Usuario.ts";

const userRepository = dataSource.getRepository(Usuario)
const user = await userRepository.findOneBy({
    id: 1,
})
user.name = "Umed"
await userRepository.save(user)