# Thenootzas "MyReads Project"

This is a book track application. There are 3 shelfs (Currently Reading, Want to Read and Read), the user can move the books from one shelf to another by using the green ring on the lower-right corner of the book cover. Also the user can search from books that are fetched from the API and can add them to the shelfs on the main page.

## Environment Setup
1. Download or clone this repository (Use '$ git clone https://github.com/Thenootza/Thenootzas_MyReads.git' command on the git bash window opened from the folder you want to clone the repository to).
2. If you download the repository: unzip the folder.
3. Open Command Prompt on your desktop (for Windows 10: on your lower-left corner of your desktop, on the search bar, type 'cmd' and hit 'return').
4. Use 'cd' to enter into the cloned or downloaded repository ('cd "folder_name"').
5. Install dependencies using this commands:
  - npm install
  - npm install --save react-router-dom (installs react-router-dom)
  - npm start
6. The app should open in your browser (http://localhost:3000/).

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
