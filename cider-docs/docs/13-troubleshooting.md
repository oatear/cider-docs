# Troubleshooting

Encountering an issue? Here are some common problems and solutions. If you can't find an answer here, please reach out to the community or file a bug report.

## Common Issues & Solutions

### 1. Card Template Renders Blank or Displays an Error

| Possible Cause | Solution |
| :--- | :--- |
| **Handlebars Syntax Error** | Double-check your **HTML** and **CSS** tabs for any unclosed tags, misspelled helpers (e.g., `{{#repat}}` instead of `{{#repeat}}`), or missing closing braces (`}}`). The syntax is case-sensitive. |
| **Invalid Asset Reference** | If an image is broken, the console often shows a loading error. Ensure your asset is: 1) Uploaded to the **Assets** section. 2) Referenced correctly in **kebab-case** (e.g., `{{assets.my-image}}`). 3) The correct file type is being used (e.g., a `.png` referenced with a `<img src="...">`). |
| **CSS Scope Error** | All CSS in your Card Template must target the `.card` class or its internal elements. For example, a style rule like `h1 { ... }` may not apply, but `.card h1 { ... }` will. |
| **Missing Card Data** | If your template is trying to use a card attribute that has no value (e.g., `{{card.power}}` is empty), this can sometimes lead to rendering issues. |
| **Cache Conflict** | Sometimes the browser cache can interfere with template updates. Try doing a hard refresh (`Ctrl + Shift + R` or `Cmd + Shift + R`). Restarting the desktop application usually resolves this. |

---

### 2. CSV Import/Export Issues

| Possible Cause | Solution |
| :--- | :--- |
| **Overwritten Data** | **Importing data overwrites everything.** If you lost data, you forgot to export first. There is no undo for import operations. |
| **Missing/Mismatched Headers** | When importing, the header row in your CSV file must **exactly** match the names of the attributes defined in the **Attributes** page. For example, if you defined a column as `Card Power`, your CSV header must be `Card Power`, not `Power` or `card-power`. |
| **List/Option Formatting** | Data in `Option List` fields (e.g., for tags or keywords) must be separated by a vertical bar (`|`) in your CSV file (e.g., `tag1|tag2|tag3`). |
| **Reserved Headers** | The `id` field is an already internally defined (auto-incremented) field and cannot be overwritten by the CSV import--use `card-id` instead if you need to define your own card ids. |

---

### 3. File Access/Project Loading (Desktop App Only)

| Possible Cause | Solution |
| :--- | :--- |
| **"Permission Denied" Errors** | This most often occurs on macOS when Electron cannot access a privileged directory. Try moving your project folder to a less restrictive location, such as your **Documents** folder. |
| **App Crash on Save/Open** | The file system operation may have failed due to an invalid path or a permissions issue. Try re-opening the project via the **File** menu and ensuring the path is valid. If the issue persists, move the project to a new folder and use **File > Save As** to attempt recovery. |

## Need Further Assistance?

If you cannot solve the issue with the steps above, please reach out using the following community resources.

### GitHub Issues
For official bug reports, feature requests, or highly technical problems:
*   **[Oatear Cider GitHub Issues Page](https://github.com/oatear/cider/issues)**
*   Please provide: the application version (from the footer), your operating system, a detailed description of the steps to reproduce the issue, and a screenshot or error message if available.

### Discord Community
For immediate help and discussions with other users and developers:
*   **[Cider Discord Server](https://discord.gg/S66xw9Wc9V)**
*   Post questions in the **`#help`** channel.
*   Post confirmed bugs or errors in the **`#bugs`** channel.