#!/usr/bin/env python3
import sys
import datetime

# Check's if user given input
if len(sys.argv) < 2:
    print("Usage: ./notes.py your_note_here")
    sys.exit()

# Take note 
note = " ".join(sys.argv[1:])

# Get present date and time
time_now = datetime.datetime.now()

# Save the note into file (notes.txt)
with open("notes.txt", "a") as file:
    file.write(f"{time_now} - {note}\n")

print("Note Saved Successfully!")
