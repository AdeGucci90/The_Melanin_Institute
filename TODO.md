# Fix GitHub Large File Warning - Git LFS Setup

## Plan Status: Approved ✅

**Current Step: 7/7 - Verify**

1. **✅** Install Git LFS: `winget install GitHub.GitLFS`
2. **✅** Navigate and init LFS: `cd The-Melanin-Institute && git lfs install`
3. **✅** Track PNGs: `git lfs track "*.png"`
4. **✅** Commit .gitattributes: `git add .gitattributes && git commit -m "Track PNGs with Git LFS"`
5. **✅** Migrate Hero1.png history: `git lfs migrate import --include="images/Hero1.png" --everything`
6. **✅** Force push: `git push --force-with-lease origin main`
7. **[PENDING]** Verify: `git lfs ls-files` and test push.

**Notes:**
- Work in `The-Melanin-Institute/` subdirectory.
- Future pushes warning-free.
- Run `git lfs ls-files` to confirm Hero1.png tracked.
- Website unchanged - LFS files download normally.

