#!/bin/bash
echo "Starting smart commit session..."

while true; do
    echo "Select changes to stage (interactive staging enabled):"
    git add -p

    git status

    echo "Describe commit message:"
    read msg

    timestamp=$(date +"%Y-%m-%d %H:%M:%S")
    fullmsg="$timestamp - $msg"

    git commit -m "$fullmsg"
    echo "Commit created: $fullmsg"

    echo "Create another commit? (y/n)"
    read choice
    if [[ "$choice" == "n" ]]; then
        break
    fi
done

echo "Smart commit session complete."
