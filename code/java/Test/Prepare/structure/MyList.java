package structure;

import java.util.*;

abstract public class MyList<E, F> {
    HashMap<F, E> members = new HashMap<F, E>();

    public void add(E member, F id) {
        members.put(id, member);
    }

    public E get(F id) {
        return members.get(id);
    }

    public void remove(F id) {
        members.remove(id);
    }

    public int count() {
        return members.size();
    }

    abstract public void print();
}
