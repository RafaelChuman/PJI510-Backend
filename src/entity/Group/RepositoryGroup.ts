import { PostgresDS } from "@src/data-source";
import { DeleteResult, In } from "typeorm";
import { Group } from "./Group";
import { InterfaceGroup, CreateGroup, DeleteGroup, updateGroup } from "./InterfaceGroup";
import internal from "stream";

class RepositoryGroup implements InterfaceGroup{
    async list(): Promise<Group[]> {
        const groups = await PostgresDS.manager.find(Group);
        
        return groups;
    }

    async find(id: string): Promise<Group | null> {
        const groups = await PostgresDS.manager.findOneBy(Group ,{
            id: id
        });
        
        return groups;
    }

    async create(group: CreateGroup): Promise<Group> {
    
        const newGroup= new Group();

        newGroup.name = group.name;
        newGroup.temperature = group.temperature;
        newGroup.humidity = group.humidity;
        newGroup.noBreak = group.noBreak;
        newGroup.User = group.User;

        await PostgresDS.manager.save(newGroup);
    
        return newGroup;
    }

    async delete(group: DeleteGroup): Promise<DeleteResult> {
        
        return await PostgresDS.manager.delete(
            Group, {
                id: In(group.ids) 
            });
    }

    async update(group: updateGroup): Promise<Group | null> {
        
        const updtGroup = await PostgresDS.manager.findOneBy(
            Group, {
                id: group.id
            });
        
        if(!updtGroup) return null;

        updtGroup.name = group.name;
        updtGroup.temperature = group.temperature;
        updtGroup.humidity = group.humidity;
        updtGroup.noBreak = group.noBreak;
        updtGroup.User = group.User;

        await PostgresDS.manager.save(Group, updtGroup);

        return updtGroup;
    }
}

export {RepositoryGroup}