class Team {

    constructor(public team:string,public rank:number) {

    }
    
    Detail(){
        console.log("Team name : " + this.team + " Player name : " + this.rank );
    }
}

class Player extends Team{


    constructor(public team:string, public rank:number, public playerName: string) {
        super(team,rank)
    }
    //here overiding super class method
    Details() {
        console.log("Player Name: " + this.playerName + " Team Name: " + this.team + " Team Rank: " + this.rank);
    }
    
}

let player = new Player("Pakistan", 2, "Aman");
player.Details();

//function over loading
function team(name: string):string;

function team(rank: number): number;

function team(a: any): any {
    return(a);
}

console.log("Team name: " + team(" Pakistan ") + " Rank " + team(4));


