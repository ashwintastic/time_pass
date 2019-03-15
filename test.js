 class Parent {
    parent(){
        console.log('parent')
    }
}

 class Child extends Parent{
    static child(){
        console.log('child', this)
    }
}

Child.child

