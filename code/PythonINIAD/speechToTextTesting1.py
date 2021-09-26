import speech_recognition as sr

# Collect speech from microphone
r = sr.Recognizer()
# We will learn with syntax next week.
# It is used here to start and finish the use of the microphone.
with sr.Microphone() as source:
  print("Say something!")
  audio = r.listen(source)

# Recognize speech
try:
  message = r.recognize_google(audio, key="AIzaSyDKv_nIzsP2aaEmLbGjL7TRaU79AzpoxL0")
  print("here recognizer thinks you said :", message)
except sr.UnknownValueError:
  print("The recognizer could not understand audio")
except sr.RequestError as e:
  print("Could not obtain results from the recognizer")