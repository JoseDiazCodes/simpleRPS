import random
def get_choices():
    player_choice = input("Enter a choice / rock, paper, scissors!: ").lower()
    options = ["rock", "paper", "scissors"]
    computer_choice = random.choice(options)
    choices = {"player": player_choice, "computer": computer_choice}
    return choices


def check_win(p1, p2):
    print(f"You chose {p1}, computer chose {p2}")
    dict = {"rock": "scissors", "scissors": "paper", "paper": "rock"}
    if p1 == p2:
        return "It's a tie!"
    elif dict[p1] == p2:
        return "You win"
    else:
        return "Computer Wins!"


choices = get_choices()
result = check_win(choices["player"], choices["computer"])
print(result)
