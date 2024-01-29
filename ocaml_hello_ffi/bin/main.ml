let say_hello who = "Hello, " ^ who ^ "!" in
let things = ["Item 1"; "Item 2"] in
let greet_things = things |> List.map say_hello in
let () = greet_things |> List.iter print_endline in ()