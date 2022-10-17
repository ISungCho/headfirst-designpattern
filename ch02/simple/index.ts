import SimpleObserver from './SimpleObserver'
import SimpleSubject from './SimpleSubject'

const simpleSubject = new SimpleSubject()
const simpleObserver = new SimpleObserver(simpleSubject)

simpleSubject.setValue(3)

simpleSubject.removeObserver(simpleObserver)