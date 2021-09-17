package calculation;

public abstract class Mul extends Add{
	@Override
	public int mul(int input_value) {
		return input_value * value;
	}
}
