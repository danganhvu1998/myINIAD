.PHONY: all clean distclean

TARGET = app
SRC = hardware.c os.c main.c
OBJ = $(addsuffix .o,$(basename $(SRC)))

all: $(TARGET)

$(TARGET): $(OBJ)
	gcc -Wall -O2 -o $@ $^

%.o: %.c
	gcc -Wall -O2 -o $@ -c $<

clean:
	rm -f $(OBJ)
	rm -f $(TARGET)

distclean: clean
	rm -f *~
