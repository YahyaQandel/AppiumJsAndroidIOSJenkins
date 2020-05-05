#!/bin/sh
# build ios app
xcodebuild -workspace ios/AppiumJsAndroidIOSJenkins.xcworkspace -destination id=C5D5F537-BAB7-45C1-BC89-BFC06EC7C1FC -configuration Debug -scheme AppiumJsAndroidIOSJenkins -derivedDataPath __tests__/apps/


echo "##### Build Android #####"
npm run android


