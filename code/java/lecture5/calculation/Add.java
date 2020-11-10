package calculation;

public abstract class Add implements Calc{
	@Override
	public int add(int input_value) {
		return input_value + value;
	}
}
