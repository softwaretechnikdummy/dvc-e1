# Aufgabe 3

## pull
Nachdem ich für Aufgabe 2 die Dokumentation in der GitHub-Oberfläche ins Repository eingepflegt habe, muss ich diese Änderungen lokal pullen:

<img src="./pull.png" width="500">

## status & diff
Eine kleine Änderung im Code wurde vorgenommen und ich prüfe mittels `git status` und `git diff`, was genau passiert ist.

Wie erwartet, werde ich bei `git status` dazu aufgefordert, die modifizierte Datei mittels `git add` aufzunehmen.

Zusätzlich zeigt `git diff` anschaulich, welche Codeänderungen genau vorgenommen wurden:

<img src="./status_diff.png" width="500">

## add & diff
Nachdem die Änderungen mittels `git add` gestaged wurden, kann ich nun mit `git status` sehen, dass alles bereit für den commit ist. Auch `git diff` zeigt nun keine Änderungen mehr an. Wenn ich allerdings `git diff --cached` ausführe, vergleicht der Befehl den staged Code mit dem letzten pull und wir sehen die Änderungen wieder im Detail:

<img src="./add.png" width="500">

## diff HEAD
Nun ändere ich nochmal etwas im Code und kann mittels `git diff HEAD` die staged & unstaged Änderungen sehen.

<img src="./diff-head.png" width="500">

## commit & push
Jetzt stage ich schnell meine zweite Änderung und führe `git commit` aus. Anschließend pushe ich den aktuellen Stand in den main branch meines Repositories:

<img src="./commit_push.png" width="500">