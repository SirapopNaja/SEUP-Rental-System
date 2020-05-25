<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\User; 
use Illuminate\Support\Facades\Auth; 
use Validator;
class UserController extends Controller 
{
public $successStatus = 200;
/** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(){ 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('access_token')->accessToken; 
            return response()->json(['success' => $success], $this->successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }
/** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'last_name' => 'required',
            'phone_number' => 'required',
            'email' => 'required|email', 
            'password' => 'required',
            'company' => 'required',
            'position' => 'required',  
            'c_password' => 'required|same:password',
            'name_picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'ssn_picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);
    if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
    if ($request->hasfile('name_picture','ssn_picture')) {
            $image = $request->file('name_picture',);
            $image2 = $request->file('ssn_picture',);
            $extension = $image->getClientOriginalExtension();
            $extension2 = $image2->getClientOriginalExtension();
            $imageName = time().'1' . '.' . $extension;
            $imageName2 = time().'2' . '.' . $extension2;
            $imagePath = $image->storeAs('', $imageName,'public');
            $imagePath2 = $image2->storeAs('', $imageName2,'public');

    
            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $input['name_picture'] = $imageName;
            $input['ssn_picture'] = $imageName2;
            $user = User::create($input);
            
            $user['token'] =  $user->createToken('access_token')->accessToken;
            return response()->json(['user'=>$user], $this->successStatus);
    }
}
/** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details() 
    { 
        $user = Auth::user(); 
        return response()->json(['user'=>$user], $this->successStatus);
    }
    public function getUserByID(Request $request,$id){
        $user = User::find($id);
        return $user;
    }
    public function userupdate(Request $request, $id)
    {
        $request->validate([
            // 'name' => 'required',
            // 'email' => 'required',
            // 'password' => 'required',
            // 'last_name' => 'required',
            // 'phone_number' => 'required',
            // 'company' => 'required',
            // 'position' => 'required',
            'person_type' => 'required',
            // 'name_picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            // 'ssn_picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            
            
        ]);

        $user = User::find($id);

        // if ($validator->fails()) { 
        //     return response()->json(['error'=>$validator->errors()], 401);            
        // }
    // if ($request->hasfile('name_picture','ssn_picture')) {
            $user->person_type = $request->person_type;
            $user->save();
            return $user;
            // $image = $request->file('name_picture',);
            // $image2 = $request->file('ssn_picture',);
            // $extension = $image->getClientOriginalExtension();
            // $extension2 = $image2->getClientOriginalExtension();
            // $imageName = time().'1' . '.' . $extension;
            // $imageName2 = time().'2' . '.' . $extension2;
            // $imagePath = $image->storeAs('', $imageName,'public');
            // $imagePath2 = $image2->storeAs('', $imageName2,'public');

    
            // $input = $request->all();
            // $input['password'] = bcrypt($input['password']);
            // $input['name_picture'] = $imageName;
            // $input['ssn_picture'] = $imageName2;
            // $user = User::create($input);
            
            // $user['token'] =  $user->createToken('MyApp')->accessToken;
            // return response()->json(['user'=>$user], $this->successStatus);
    // }
}

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $D_user = User::find($id);
        $D_user->destroy($id);
        return 'delete suscessfully';
    }
    public function show(){
        return  User::all();
    }

}
