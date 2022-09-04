import {Factory, Seeder} from "typeorm-seeding";
import {Connection, getRepository} from "typeorm";
import { ProfileItem } from "../entity/ProfileItem";
import { ProfileCategoriesController } from "../controller/ProfileCategoriesController";


export class ProfileItemsSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {

        const repo = getRepository(ProfileItem);
        const profileCategories = await ProfileCategoriesController.repo.find();

        let profileItem1 = new ProfileItem();
        profileItem1.name = "Studio White / Mineral";
        profileItem1.price = 233;
        profileItem1.media = "https://s7d2.scene7.com/is/image/HermanMillerStore/s_frame_studio_white_mineral";
        profileItem1.disabled = false;
        profileItem1.checked = false;
        profileItem1.profileCategory = profileCategories[0];
        await repo.save(profileItem1);
        let profileItem2 = new ProfileItem();
        profileItem2.name = "Canyon";
        profileItem2.price = 100;
        profileItem2.media = "https://s7d2.scene7.com/is/image/HermanMillerStore/s_frame_canyon";
        profileItem2.disabled = false;
        profileItem2.checked = true;
        profileItem2.profileCategory = profileCategories[0];
        await repo.save(profileItem2);
        let profileItem3 = new ProfileItem();
        profileItem3.name = "Carbon";
        profileItem3.price = 0;
        profileItem3.media = "https://s7d2.scene7.com/is/image/HermanMillerStore/s_frame_carbon";
        profileItem3.disabled = false;
        profileItem3.checked = false;
        profileItem3.profileCategory = profileCategories[0];
        await repo.save(profileItem3);
        let profileItem4 = new ProfileItem();
        profileItem4.name = "Glacier";
        profileItem4.price = 50;
        profileItem4.media = "https://s7d2.scene7.com/is/image/HermanMillerStore/s_frame_glacier";
        profileItem4.disabled = false;
        profileItem4.checked = false;
        profileItem4.profileCategory = profileCategories[0];
        await repo.save(profileItem4);
        let profileItem5 = new ProfileItem();
        profileItem5.name = "Nightfall";
        profileItem5.price = 80;
        profileItem5.media = "https://s7d2.scene7.com/is/image/HermanMillerStore/s_frame_nightfall";
        profileItem5.disabled = false;
        profileItem5.checked = false;
        profileItem5.profileCategory = profileCategories[0];
        await repo.save(profileItem5);
        let profileItem6 = new ProfileItem();
        profileItem6.name = "Size A - Small";
        profileItem6.price = 0;
        profileItem6.media = "";
        profileItem6.disabled = false;
        profileItem6.checked = false;
        profileItem6.profileCategory = profileCategories[1];
        await repo.save(profileItem6);
        let profileItem7 = new ProfileItem();
        profileItem7.name = "Size B - Medium";
        profileItem7.price = 100;
        profileItem7.media = "";
        profileItem7.disabled = false;
        profileItem7.checked = true;
        profileItem7.profileCategory = profileCategories[1];
        await repo.save(profileItem7);
        let profileItem8 = new ProfileItem();
        profileItem8.name = "Size C - Large";
        profileItem8.price = 200;
        profileItem8.media = "";
        profileItem8.disabled = false;
        profileItem8.checked = false;
        profileItem8.profileCategory = profileCategories[1];
        await repo.save(profileItem8);
        let profileItem9 = new ProfileItem();
        profileItem9.name = "Basic Back Support";
        profileItem9.price = 0;
        profileItem9.media = "";
        profileItem9.disabled = false;
        profileItem9.checked = false;
        profileItem9.profileCategory = profileCategories[2];
        await repo.save(profileItem9);
        let profileItem10 = new ProfileItem();
        profileItem10.name = "Adjustable Lumbar Support";
        profileItem10.price = 100;
        profileItem10.media = "";
        profileItem10.disabled = false;
        profileItem10.checked = true;
        profileItem10.profileCategory = profileCategories[2];
        await repo.save(profileItem10);
        let profileItem11 = new ProfileItem();
        profileItem11.name = "Adjustable Posturefit SL";
        profileItem11.price = 120;
        profileItem11.media = "";
        profileItem11.disabled = false;
        profileItem11.checked = false;
        profileItem11.profileCategory = profileCategories[2];
        await repo.save(profileItem11);
        let profileItem12 = new ProfileItem();
        profileItem12.name = "Standard";
        profileItem12.price = 0;
        profileItem12.media = "";
        profileItem12.disabled = false;
        profileItem12.checked = false;
        profileItem12.profileCategory = profileCategories[3];
        await repo.save(profileItem12);
        let profileItem13 = new ProfileItem();
        profileItem13.name = "Tilt limited and Seat Angle";
        profileItem13.price = 120;
        profileItem13.media = "";
        profileItem13.disabled = false;
        profileItem13.checked = true;
        profileItem13.profileCategory = profileCategories[3];
        await repo.save(profileItem13);
        let profileItem14 = new ProfileItem();
        profileItem14.name = "Height-Adjustable Arms";
        profileItem14.price = 120;
        profileItem14.media = "";
        profileItem14.disabled = false;
        profileItem14.checked = false;
        profileItem14.profileCategory = profileCategories[4];
        await repo.save(profileItem14);
        let profileItem15 = new ProfileItem();
        profileItem15.name = "Fully Adjustable Arms";
        profileItem15.price = 150;
        profileItem15.media = "";
        profileItem15.disabled = false;
        profileItem15.checked = true;
        profileItem15.profileCategory = profileCategories[4];
        await repo.save(profileItem15);
        let profileItem16 = new ProfileItem();
        profileItem16.name = "Stationary Arms";
        profileItem16.price = 0;
        profileItem16.media = "";
        profileItem16.disabled = false;
        profileItem16.checked = false;
        profileItem16.profileCategory = profileCategories[4];
        await repo.save(profileItem16);
        let profileItem17 = new ProfileItem();
        profileItem17.name = "Leather";
        profileItem17.price = 133;
        profileItem17.media = "";
        profileItem17.disabled = false;
        profileItem17.checked = true;
        profileItem17.profileCategory = profileCategories[5];
        await repo.save(profileItem17);
        let profileItem18 = new ProfileItem();
        profileItem18.name = "Standard";
        profileItem18.price = 0;
        profileItem18.media = "";
        profileItem18.disabled = false;
        profileItem18.checked = false;
        profileItem18.profileCategory = profileCategories[5];
        await repo.save(profileItem18);
        let profileItem19 = new ProfileItem();
        profileItem19.name = "2.5-inch Carpet Caster";
        profileItem19.price = 0;
        profileItem19.media = "";
        profileItem19.disabled = false;
        profileItem19.checked = false;
        profileItem19.profileCategory = profileCategories[6];
        await repo.save(profileItem19);
        let profileItem20 = new ProfileItem();
        profileItem20.name = "Carpet Caster";
        profileItem20.price = 25;
        profileItem20.media = "";
        profileItem20.disabled = false;
        profileItem20.checked = true;
        profileItem20.profileCategory = profileCategories[6];
        await repo.save(profileItem20);
        let profileItem21 = new ProfileItem();
        profileItem21.name = "Multi-Surface Caster with Quiet Roll";
        profileItem21.price = 35;
        profileItem21.media = "";
        profileItem21.disabled = false;
        profileItem21.checked = false;
        profileItem21.profileCategory = profileCategories[6];
        await repo.save(profileItem21);

    }
}
