function skillMember() {
    var member = {
        name: 'skill',
        age: 20,
        show: function () {
            console.log(this.name + ' is ' + this.age + ' years old');
        }
    };
    return member;
}