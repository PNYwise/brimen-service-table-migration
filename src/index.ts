import { BrimenRevampDataSource, BrimenTransferDataSource } from "./data-source";

async function main() {
    await BrimenRevampDataSource.initialize()
    console.log('brimenRevampDataSource has been initialized!');

    await BrimenTransferDataSource.initialize()
    console.log('BrimenTransferDataSource has been initialized!');
    
    process.exit(1)
}

main()