# Emotive Touchscreen EAU

Touchscreen for standup touchscreen and iPad

### Getting Started

Start app in development mode:

```shell
nvm use # uses supported Node version for this project (optional)
cp .env.example .env
npm install
npm start
```

### Updating the PDF Images
1. Convert the pdf to standalone images using https://pdftoimage.com/pdf-to-png - or by any other means but the names must be formatted properly
2. Drop them in the appropriate directory, e.g public/assets/cvsafety
3. cd into the directory and run this command:

```bash
count=1

for file in *; do
    if [[ -f "$file" ]]; then
        extension="${file##*.}"
        filename="${file%.*}"
        new_filename=$(printf "%03d.${extension}" ${count})
        mv "${file}" "${new_filename}"
        ((count++))
    fi
done
```
This will format the names of the folder 