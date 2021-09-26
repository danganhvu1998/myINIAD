package sample2.pkg2;

import java.util.List;
import java.util.HashMap;
import sample2.pkg1.Member;

public class MemberList {
    HashMap<String, Member> members = new HashMap<String, Member>();

    public void add(Member member) {
        members.put(member.id, member);
    }

    public Member get(String id) {
        return members.get(id);
    }

    public void remove(String id) {
        members.remove(id);
    }

    public int count() {
        return members.size();
    }
}
