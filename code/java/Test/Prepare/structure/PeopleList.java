package structure;

import pkg1.*;

public class PeopleList extends MyList<Person, Integer> {
    public void add(Person member) {
        super.add(member, member.id);
    }

    @Override
    public void print(){
        for (int i = 1; i < Person.count; i++) {
            this.members.get(i).printInfo();
        }
    }
}
