import "dotenv/config"
import { deployContract } from "./utils"

async function main() {
  await deployContract("PUMP", [], true)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

