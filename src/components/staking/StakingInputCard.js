import InputItem from './InputItem'

const StakingInputCard = ({
    stakeTokens,
    unstakeTokens,
    unstakeTokenstimefalse,
    tetherBalance,
}) => {
    return (
        <div>
            <InputItem 
            stakeTokens={stakeTokens}
            unstakeTokens={unstakeTokens}
            unstakeTokenstimefalse={unstakeTokenstimefalse}     
            tetherBalance={tetherBalance}
            />
        </div>
    )
}

export default StakingInputCard