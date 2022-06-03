# Cars-Store-React-Native

1. Запускам студию
2. запускаем эмулятор

3. проверяем что у нас в path видно android sdk

echo $PATH

если нету то(в terminal):
export ANDROID_HOME=/home/jorik/Android/Sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH


4. в одном терминале
yarn start 

5. в соседнем терминале (запускаем первой)
yarn android

p.s. для каждого из 2х терминалов должны быть видны переменные $PATH, что мы вносили выше

